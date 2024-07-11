import conf from "../conf/conf";
import {Client,Databases,Query,Storage,ID} from "appwrite";


export class BucketStorage{
Client = new Client();
bucket;


constructor(){

this.Client
.setEndpoint(conf.appWriterUrl)
.setProject(conf.projectId);

this.bucket = new Storage(this.Client);


}


async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.bucketId
            ,ID.unique()
            ,file
        )
    } catch (error) {
        throw new Error(error)
        return  false
    }
}

async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.bucketId
            ,fileId
        )

    } catch (error) {
        throw new Error(error)
        return false
    }
}

async previewFile(fileId){
    try {
        return this.bucket.getFilePreview(
            conf.bucketId,
            fileId
        )

    } catch (error) {
        throw new Error(error)
        return false
    }
}


}

const bucketStorage = new BucketStorage();

export default bucketStorage;