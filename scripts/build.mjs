import { cp, mkdir, readFile, stat, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('.'),output=path.join(root,'dist');
if(path.dirname(output)!==root||path.basename(output)!=='dist')throw new Error('Invalid build output directory');
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
const files=['index.html','project.html','styles.css','app.js','content.js','hand.js','hand-data.js'];
for(const file of files)await cp(file,path.join(output,file));
await cp('assets',path.join(output,'assets'),{recursive:true});
for(const file of ['index.html','project.html']){const html=await readFile(file,'utf8');for(const[,url]of html.matchAll(/(?:src|href)="([^"#?]+)(?:[?#][^"]*)?"/g)){if(/^(?:https?:|mailto:)/.test(url))continue;await stat(path.resolve(url));}}
let bytes=0,count=0;async function walk(dir){for(const item of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory())await walk(p);else {bytes+=(await stat(p)).size;count++;}}}await walk(output);
console.log(`Built ${count} static files (${(bytes/1024).toFixed(0)} KiB). All local HTML assets resolve.`);
