export const eventMock = {
  httpMethod: 'POST',
  path: '/example',
  pathParameters: {
    id: '82'
  },
  queryString: '',
  body: JSON.stringify({
    name: 'Novo nome 11111',
    user: 'iamelisandro',
    email: 'elisandro.correa@adventures.inc',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVsaXNhbmRyby5jb3JyZWFAYWR2ZW50dXJlcy5pbmMiLCJuYW1lIjoiRWxpc2FuZHJvIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NTEwMTQyNzksImV4cCI6MTY1MTA1NzQ3OSwiYXVkIjoiaHR0cHM6Ly9jYXRhbHlzdGNvcmUuaW8iLCJpc3MiOiJBZHZlbnR1cmVzIiwic3ViIjoiQUJDREVGMTIzNDU2NyJ9.5zSIklIugqFe77j1BeFIyxcwbPnjZfwuFuUqfdZCr48',
    description: 'Descrição novo',
    kpiId: 1,
    ownerId: 1,
    targetId: 1,
    startDate: '2022-03-31 00:00:00',
    endDate: '2022-04-01 00:00:00',
    meta: 1.5,
    tags: [
      { id: 146, title: 'Tag um' },
      { id: 147, title: 'Tag dois' },
      { id: 148, title: 'Tag três' }
    ],
    todoList: [
      { todoId: 1, statusId: 1 },
      { todoId: 2, statusId: 1 }
    ],
    documents: [
      { id: 55, pathName: 'file-name-edited' },
      { id: 56, pathName: 'file-name-edited' }
    ]
  })
}
