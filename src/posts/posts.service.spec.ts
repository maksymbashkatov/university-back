import { AppDataSource } from '../configs/database/data-source';
import { Post } from './entities/post.entity';
import {
  createPost,
  deletePostById,
  deletePostByIdForUnitTest,
} from './posts.service';

const postsRepository = AppDataSource.getRepository(Post);

describe('#createPost', () => {
  it('calls postsRepository.save with correct params', async () => {
    const spy = jest
      .spyOn(postsRepository, 'save')
      .mockImplementation((() => Promise.resolve()) as any);

    const title = 'TestTitle';
    const description = 'TestDescription';

    await createPost({ title, description });

    expect(spy.mock.calls).toEqual([[{ title, description }]]);
  });
});

describe('#deletePostById', () => {
  it('calls deletePostById.delete', async () => {
    const spy = jest
      .spyOn(postsRepository, 'delete')
      .mockImplementation((() => Promise.resolve()) as any);

    await deletePostByIdForUnitTest(1);
    expect(spy.mock.calls).toEqual([[1]]);
  });
});
