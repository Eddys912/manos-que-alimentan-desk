import { Request, Response } from 'express';
import { UserRepository } from '../../infraestructure/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { IUserProps } from '../../domain/interfaces/IUserProps';

const userRepository = new UserRepository();

export class userController {
  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const {
        firstName,
        lastName,
        middleName,
        birthDate,
        email,
        password,
        role,
        phone,
        address,
        user_type,
      } = req.body;

      const userProps: IUserProps = {
        firstName,
        lastName,
        middleName,
        birthDate,
        email,
        password,
        role,
        phone,
        address,
        user_type,
      };
      const user = new User(userProps);
      const newUser = await userRepository.create(user);
      res
        .status(201)
        .json({ id: newUser.getId, message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user: ', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  }

  static async findAllUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users = await userRepository.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error finding users: ', error);
      res.status(500).json({ message: 'Error finding users' });
    }
  }
}
