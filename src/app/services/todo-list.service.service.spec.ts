import { TestBed } from '@angular/core/testing';

import { TodoListService} from './todo-list.service';

describe('TodoList.ServiceService', () => {
  let service: TodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});