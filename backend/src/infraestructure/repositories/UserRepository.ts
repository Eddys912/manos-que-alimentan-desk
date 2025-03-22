import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import pool from '../database/connection';

export class UserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    try {
      const query = `INSERT INTO Users 
                    (id, first_name, last_name, middle_name, birth_date, email, password, role, phone, address, user_type, created_at, updated_at)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
      const values = [
        user.getId(),
        user.getFirstName(),
        user.getLastName(),
        user.getMiddleName(),
        user.getBirthDate(),
        user.getEmail(),
        user.getPassword(),
        user.getRole(),
        user.getPhone(),
        user.getAddress(),
        user.getUserType(),
        user.getCreatedAt(),
        user.getUpdatedAt(),
      ];
      await pool.query(query, values);
      return user;
    } catch (e) {
      console.log('Error creating user: ', e);
      throw new Error('Failed to create user');
    }
  }

  async update(user: User): Promise<User> {
    try {
      const query = `UPDATE Users SET 
                        first_name = $1, last_name = $2, middle_name = $3, 
                        birth_date = $4, 
                        email = $5, password = $6,
                        role = $7,
                        phone = $8, 
                        address = $8,
                        user_type = $10,
                        updated_at = $11
                    WHERE id = $12`;
      const values = [
        user.getFirstName(),
        user.getLastName(),
        user.getMiddleName(),
        user.getBirthDate(),
        user.getEmail(),
        user.getPassword(),
        user.getRole(),
        user.getPhone(),
        user.getAddress(),
        user.getUserType(),
        user.getUpdatedAt(),
        user.getId(),
      ];
      await pool.query(query, values);
      return user;
    } catch (e) {
      console.log('Error updating user: ', e);
      throw new Error('Failed to update user');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const query = 'DELETE FROM Users WHERE id = $1';
      await pool.query(query, [id]);
    } catch (e) {
      console.log('Error deleting user: ', e);
      throw new Error('Failed to delete user');
    }
  }

  async findById(id: string): Promise<User | null> {
    try {
      const query = 'SELECT * FROM Users WHERE id = $1';
      const result = await pool.query(query, [id]);
      if (result.rowCount === 0) return null;
      return result.rows[0];
    } catch (e) {
      console.log('Error finding user by email: ', e);
      throw new Error('Failed to find user by email');
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const query = 'SELECT * FROM Users WHERE email = $1';
      const result = await pool.query(query, [email]);
      if (result.rowCount === 0) return null;
      return result.rows[0];
    } catch (e) {
      console.log('Error finding user by email: ', e);
      throw new Error('Failed to find user by email');
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const query = 'SELECT * FROM Users';
      const result = await pool.query(query);
      return result.rows;
    } catch (e) {
      console.log('Error finding all users: ', e);
      throw new Error('Failed to find all users');
    }
  }
}
