
import { Request, Response } from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {
    const user = createUser({ 
        email: 'igor@gmail',
        password: '123456',
        tech: [
            'Node.js', 
            'ReactJS', 
            'React Native',
            { title: 'Javascript', experience: 100 },
        ],
     });

    return response.json({ message: 'Hello World' });
}