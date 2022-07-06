'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
    async index() {
        const ctx=this.ctx;
        let msgs=await ctx.model.Message.findAll({
            limit: 10,
            offset: 0,
        });
        // ctx.body=msgs;
        await ctx.render('index.html',{msgs});
    }
    
    async create() {
        const ctx=this.ctx;
        // let name=ctx.request.body.name;
        // let email=ctx.request.body.email;
        // let message=ctx.request.body.message;
        // let csrf=ctx.csrf;
        const {name,email,message}=ctx.request.body;
        const rec=await ctx.model.Message.create({name,email,message});
        ctx.status=201;
        ctx.body=rec;
    }

    async show() {
        const ctx=this.ctx;
        let id=ctx.params.id;
        const msg=await ctx.model.Message.findByPk(id);
        if(!msg){
            ctx.status=404;
            return;
        }
        ctx.body=msg;
    }

    async update() {
        const ctx=this.ctx;
    }

    async destroy() {
        const ctx=this.ctx;
        let id=ctx.params.id;
        const msg=await ctx.model.Message.findByPk(id);
        if(!msg){
            ctx.status=404;
            return;
        }
        await msg.destroy();
        ctx.status=204;
    }
}

module.exports = UsersController;