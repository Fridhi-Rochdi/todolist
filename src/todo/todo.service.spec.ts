import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { NotFoundException } from '@nestjs/common';

describe('TodoService', () => {
  let service: TodoService;

  const mockTodo: Todo = {
    id: 1,
    title: 'Test Todo',
    description: 'Test Description',
    completed: false,
    createdAt: new Date(),
  };

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(Todo),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      mockRepository.find.mockResolvedValue([mockTodo]);
      const result = await service.findAll();
      expect(result).toEqual([mockTodo]);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return a todo by id', async () => {
      mockRepository.findOne.mockResolvedValue(mockTodo);
      const result = await service.findOne(1);
      expect(result).toEqual(mockTodo);
      expect(mockRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException if todo not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create and return a new todo', async () => {
      const createDto = { title: 'New Todo', description: 'New Description' };
      mockRepository.create.mockReturnValue(mockTodo);
      mockRepository.save.mockResolvedValue(mockTodo);

      const result = await service.create(createDto);
      expect(result).toEqual(mockTodo);
      expect(mockRepository.create).toHaveBeenCalledWith(createDto);
      expect(mockRepository.save).toHaveBeenCalledWith(mockTodo);
    });
  });

  describe('update', () => {
    it('should update and return the todo', async () => {
      const updateDto = { title: 'Updated', completed: true };
      const updatedTodo = { ...mockTodo, ...updateDto };

      mockRepository.findOne.mockResolvedValue(mockTodo);
      mockRepository.save.mockResolvedValue(updatedTodo);

      const result = await service.update(1, updateDto);
      expect(result).toEqual(updatedTodo);
      expect(mockRepository.save).toHaveBeenCalled();
    });

    it('should throw NotFoundException if todo not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.update(999, { title: 'Test' })).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should remove a todo', async () => {
      mockRepository.findOne.mockResolvedValue(mockTodo);
      mockRepository.remove.mockResolvedValue(mockTodo);

      await service.remove(1);
      expect(mockRepository.remove).toHaveBeenCalledWith(mockTodo);
    });

    it('should throw NotFoundException if todo not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.remove(999)).rejects.toThrow(NotFoundException);
    });
  });
});
