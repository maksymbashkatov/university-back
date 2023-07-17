import 'dotenv/config';
import { AppDataSource } from '../src/configs/database/data-source';
import { Post } from '../src/posts/entities/post.entity';
import request from 'supertest';
import app from '../src/application/app';
import { DataSource } from 'typeorm';

let dataSource: DataSource;
const postRepository = AppDataSource.getRepository(Post);

beforeAll(async () => {
  dataSource = await AppDataSource.initialize();
});

beforeEach(async () => {
  postRepository.clear();
});

afterAll(async () => {
  await dataSource.destroy();
});

describe('/posts', () => {
  describe('POST /posts', () => {
    it('returns 400 status if title is not passed', async () => {
      await request(app)
        .post('/api/v1/posts')
        .send({ description: 'Description1' })
        .expect(400);
    });

    it('returns 400 status if description is not passed', async () => {
      await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1' })
        .expect(400);
    });

    it('saves post', async () => {
      const title = 'Title1';
      const description = 'Description1';

      const response = await request(app)
        .post('/api/v1/posts')
        .send({ title, description })
        .expect(201);

      await postRepository.save(response.body);
      const posts = await postRepository.find();

      expect(posts.length).toEqual(1);

      expect(posts[0]).toMatchObject({
        title,
        description,
      });
    });

    it('returns created post', async () => {
      const response = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title2', description: 'Description2' })
        .expect(201);

      const posts = await postRepository.find();

      expect(posts.length).toEqual(1);

      const { id, createdAt, updatedAt, title, description } = posts[0];

      expect(response.body).toEqual({
        id,
        createdAt: createdAt.toISOString(),
        updatedAt: updatedAt.toISOString(),
        title,
        description,
      });
    });
  });
  describe('GET /posts', () => {
    it('returns an empty list if no posts', async () => {
      const response = await request(app).get('/api/v1/posts').expect(200);

      expect(response.body).toEqual([]);
    });

    it('returns all saved posts', async () => {
      const { body: firstPost } = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1', description: 'Description1' })
        .expect(201);

      const { body: secondPost } = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title2', description: 'Description2' })
        .expect(201);

      const response = await request(app).get('/api/v1/posts').expect(200);

      expect(response.body).toEqual([firstPost, secondPost]);
    });

    it('returns one saved post by id', async () => {
      const { body: post } = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1', description: 'Description1' })
        .expect(201);

      const response = await request(app)
        .get(`/api/v1/posts/${post.id}`)
        .expect(200);

      expect(response.body.id).toEqual(post.id);
    });

    it('returns 400 status if post id not valid', async () => {
      await request(app).get('/api/v1/posts/notValidId').expect(400);
    });

    it('returns 404 status if post created, but enter id for not exist post', async () => {
      const { body: post } = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1', description: 'Description1' })
        .expect(201);
      console.log(post);

      await request(app)
        .get(`/api/v1/posts/${post.id + 1}`)
        .expect(404);
    });

    it('returns 404 status if post not found', async () => {
      await request(app).get(`/api/v1/posts/0`).expect(404);
    });
  });

  describe('PATCH /posts', () => {
    it('returns 404 status if post not found', async () => {
      await request(app).patch(`/api/v1/posts/0`).expect(404);
    });

    it('returns 204 status if post correct updated', async () => {
      const response = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1', description: 'Description1' })
        .expect(201);

      await request(app)
        .patch(`/api/v1/posts/${response.body.id}`)
        .send({ title: 'Title11', description: 'Description100' })
        .expect(204);
    });

    it('returns 400 status if title is not valid', async () => {
      const response = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1', description: 'Description1' })
        .expect(201);

      await request(app)
        .patch(`/api/v1/posts/${response.body.id}`)
        .send({ title: 100 })
        .expect(400);
    });

    it('returns 400 status if description is not valid', async () => {
      const response = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1', description: 'Description1' })
        .expect(201);

      await request(app)
        .patch(`/api/v1/posts/${response.body.id}`)
        .send({ description: 101 })
        .expect(400);
    });
  });

  describe('DELETE /posts', () => {
    it('returns 404 status if post not found', async () => {
      await request(app).delete(`/api/v1/posts/0`).expect(404);
    });

    it('returns 204 status if post correct deleted', async () => {
      const response = await request(app)
        .post('/api/v1/posts')
        .send({ title: 'Title1', description: 'Description1' })
        .expect(201);

      await request(app)
        .delete(`/api/v1/posts/${response.body.id}`)
        .expect(204);
    });
  });
});
