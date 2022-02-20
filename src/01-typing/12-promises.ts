{
  interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
  }

  const url = 'https://dummy.restapiexample.com/api/v1/employees';

  const fetchEmployees = async (): Promise<Array<Employee>> => {
    const { ok, status, statusText, json } = await fetch(url);

    if (!ok) throw new Error(`${status} ${statusText}`);

    const { data } = await json();

    return data;
  }

  fetchEmployees().then((value) => {
    console.log(value);
  }).catch((error) => {
    console.log(error);
  });
}
