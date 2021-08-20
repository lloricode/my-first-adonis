// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {

    public async index({response}: HttpContextContract) {
        const users = await User.query()

        return response.json(users)
    }

    public async store({request, response}: HttpContextContract) {
        // const ray = require('node-ray').ray

        const data = request.only([
            'username',
            'email',
            'password',
        ]);

        // ray().clearAll();
        // ray( data.username);

        // const user = new User();
        //
        // user.username = data.username;
        // user.email = data.email;
        // user.password = data.password;
        //
        // await user.save();

        const user = await User.create(data);

        // const user = await Database.insertQuery<User>().table(User.table).insert(data);

        return response.json({user});
    }

    public async show({response, username}: HttpContextContract) {
        const users = await User.query().where('username', username).first()

        return response.json(users)
    }
}
