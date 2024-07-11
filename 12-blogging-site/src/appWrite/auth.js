import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appWriterUrl);
        this.client.setProject(conf.projectId);
        this.account = new Account(this.client);
    }
    async createAccount ({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if (userAccount) {
                //Call another method login
                this.login({email,password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw new Error('Error creating account');
        }
    }

    async login ({email,password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            
            throw new Error('Error logging in');
        }
    }

    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw new Error('Error getting user');
        }
        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw new Error('Error logging out');
        }
    }
}


const authService = new AuthService();
export default authService;