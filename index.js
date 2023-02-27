
const packageUrl=require('./package.json')
const express=require('express')
//to server
const { createServer }=require('http')
const path=require('path')
const app=express()
const httpServer=createServer(app)
app.use('/', express.static(path.join(__dirname, 'public')))
httpServer.listen(process.env.PORT || 5000, ()=>{
	console.clear()
	console.log('\x1b[33m[Cardial Info]\x1b[0m : Server Uploaded')
	console.log('\x1b[33m[Cardial Info]\x1b[0m : API V:'+packageUrl.version)
	console.log('\x1b[33m[Cardial Info]\x1b[0m : Desc: '+packageUrl.description)
	console.log('\x1b[33m[Cardial Info]\x1b[0m : rodando localmente pelo IP: '+process.env.PORT+ ' ou Porta 5000')
	console.log('------------------------------------------')
})