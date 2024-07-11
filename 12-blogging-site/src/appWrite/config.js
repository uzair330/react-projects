import conf from "../conf/conf";
import {Client,Databases,Query,Storage,ID} from "appwrite";


export class Services{
client = new Client();
databases
bucket

constructor(){
    this.client
    .setEndpoint(conf.appWriterUrl)
    .setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
}

async createPost({title,slug,content,featureImage,status,userId}){
try {
    const result = await this.databases.createDocument(conf.databaseId, conf.collectionId, slug, {
        title,
        content,
        featureImage,
        status,
        userId
    }
);


    
} catch (error) {
    throw error;
}
}

async updatePost(slug,{title,content,featureImage,status}){
    try {
        return this.databases.updateDocument(conf.databaseId, conf.collectionId, slug, {
            title,
            content,
            featureImage,
            status
        }); 
    } catch (error) {
        throw error

    }
}

async deletePost(slug){
    try {
        this.databases.deleteDocument(conf.databaseId, conf.collectionId, slug);
        return true;
    } catch (error) {
        throw error
        return false;
    }

}

async getPost(slug){
    try {
        return this.databases.getDocument(conf.databaseId, conf.collectionId, slug);
    } catch (error) {
        throw error
        return false;
    }
}

async getPosts(queries=[Query.equal("status" == "active")]){
    try {
        return await this.databases.listDocuments(conf.databaseId, conf.collectionId, queries);
        return true;
    } catch (error) {
        throw error
        return false;
    }
}


}

const services = new Services();

export default services;

