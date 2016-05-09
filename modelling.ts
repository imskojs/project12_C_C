
interface Photo {
  url: string;
  id: string;
  owner: string;
}

class User {
  profilePhoto: Photo;
  nickname: string;
  email: string;
  gender: string;
  age: number; // enum
  occupation: string; // enum
  location: string; // enum
  education: string; // enum
  maritalStatus: string; // enum
  // required 4 to 10
  interests: Array<string>; // array of enums
}
