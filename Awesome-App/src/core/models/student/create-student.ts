export interface StudentModel {
  firstName: string;
  lastName: string;
  file: File;
}

export interface StudentApi {
  firstname: string;
  lastname: string;
  photo: File;
}

export function mapToApi(data: StudentModel): StudentApi {
  return {
    firstname: data.firstName,
    lastname: data.lastName,
    photo: data.file,
  };
}
