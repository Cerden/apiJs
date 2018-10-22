interface TestObject {
  name: string;
  message: string;
};

interface TestObjectParams {
  name: string;
};

const testObject = ({ name }: TestObjectParams): TestObject => ({
  name,
  message: 'Test object',
});

export default testObject;
