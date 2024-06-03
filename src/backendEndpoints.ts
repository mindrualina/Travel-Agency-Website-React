const serverURL: string = "http://localhost:8080";

export namespace UsersRoutes {
    export const GET_ALL: string = `${serverURL}/GetAll`;
    export const LOGIN: string = `${serverURL}/Users/Login`;
    export const SIGN_UP: string = `${serverURL}/Users/SignUp`;
}

export namespace CarRoutes {
    export const INSERT: string = `${serverURL}/Car/Insert`;
    export const GET_ALL: string = `${serverURL}/Users/GetAll`;
}