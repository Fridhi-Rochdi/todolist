import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

describe('TodoController', () => {
  let controller: TodoController;
  let service: TodoService;

  const mockTodo = {
    id: 1,
    title: 'Test Todo',
    description: 'Test Description',
    completed: false,
    createdAt: new Date(),
  };

  const mockTodoService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: mockTodoService,
        },
      ],
    }).compile();

    controller = module.get<TodoController>(TodoController);
    service = module.get<TodoService>(TodoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      mockTodoService.findAll.mockResolvedValue([mockTodo]);
      const result = await controller.findAll();
      expect(result).toEqual([mockTodo]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single todo', async () => {
      mockTodoService.findOne.mockResolvedValue(mockTodo);
      const result = await controller.findOne(1);
      expect(result).toEqual(mockTodo);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create a new todo', async () => {
      const createDto: CreateTodoDto = {
        title: 'New Todo',
        description: 'New Description',
      };
      mockTodoService.create.mockResolvedValue(mockTodo);
      const result = await controller.create(createDto);
      expect(result).toEqual(mockTodo);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update a todo', async () => {
      const updateDto: UpdateTodoDto = { title: 'Updated', completed: true };
      const updatedTodo = { ...mockTodo, ...updateDto };
      mockTodoService.update.mockResolvedValue(updatedTodo);

      const result = await controller.update(1, updateDto);
      expect(result).toEqual(updatedTodo);
      expect(service.update).toHaveBeenCalledWith(1, updateDto);
    });
  });

  describe('remove', () => {
    it('should remove a todo', async () => {
      mockTodoService.remove.mockResolvedValue(undefined);
      await controller.remove(1);
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
