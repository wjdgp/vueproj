/* 테스트 데이터 세팅 */
const UserList = [
  {
    id: 1,
    departmentId: 1,
    name: '홍길동',
    userid: 'hong',
    role: 'leader',
    email: 'hong@email.com',
    phone: '010-1234-5678',
    createdAt: '2021-12-01T00:00:00.000Z',
    Department: { id: 1, name: '개발팀', code: 'dev', createdAt: '2021-12-01T00:00:00.000Z' }
  },
  {
    id: 2,
    departmentId: 2,
    name: '김길동',
    userid: 'kim',
    role: 'member',
    email: 'kim@email.com',
    phone: '010-9876-5432',
    createdAt: '2021-12-01T00:00:00.000Z',
    Department: { id: 2, name: '영업팀', code: 'sales', createdAt: '2021-12-01T00:00:00.000Z' }
  }
]
