// Import Appwrite configuration.
// This file contains your Appwrite URL, Project ID,
// Database ID, Collection ID, and Bucket ID.
import config from "../config/config.js";

// Import required classes and utilities from Appwrite SDK.
import { Client, Databases, Storage, Query, ID, Account } from "appwrite";

// Create a class to manage all Appwrite database and storage operations.
export class DatabseSerivices {
  // Create an Appwrite client.
  // The client is responsible for connecting our application to Appwrite.
  client = new Client();

  // These variables will store Appwrite service objects.
  databases;
  bucket;

  // Constructor runs automatically whenever we create an object
  // of this class.
  constructor() {
    // Connect our application to the Appwrite server.
    this.client
      .setEndpoint(config.appwriteUrl) // Set Appwrite server URL.
      .setProject(config.appwriteProjectId); // Set Project ID.

    // Create an Account service.
    // Useful for login, logout, registration, and user authentication.
    // this.account = new Account(this.client);

    // Create a Database service.
    // We use this to create, read, update, and delete documents.
    this.databases = new Databases(this.client);

    // Create a Storage service.
    // We use this to upload, delete, and preview files.
    this.bucket = new Storage(this.client);
  }

  // =====================================================
  // CREATE POST
  // =====================================================

  // This method creates a new blog post in the Appwrite database.
  //
  // We receive an object containing:
  // title         = Title of the blog post.
  // slug          = Unique Appwrite document ID.
  // content       = Main content of the blog post.
  // featuredImage = Image file ID or image reference.
  // status        = Post status (active or inactive).
  // userId        = ID of the user who created the post.

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      // createDocument() inserts a new document into the collection.
      return await this.databases.createDocument(
        config.appwriteDatabaseId, // Database ID.
        config.appwriteCollectionId, // Collection ID.
        slug, // Unique document ID.

        // Data that will be saved inside the document.
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      // Display an error if post creation fails.
      console.log("Create Post Error =", error);
    }
  }

  // =====================================================
  // UPDATE POST
  // =====================================================

  // This method updates an existing blog post.
  //
  // slug = Document ID of the post we want to update.
  // The second parameter contains the updated post information.

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      // updateDocument() updates an existing document.
      return await this.databases.updateDocument(
        config.appwriteDatabaseId, // Database ID.
        config.appwriteCollectionId, // Collection ID.
        slug, // Document ID of the post.

        // New data that we want to save.
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      // Display an error if updating fails.
      console.log("Update Post Error =", error);
    }
  }

  // =====================================================
  // DELETE POST
  // =====================================================

  // This method permanently deletes a blog post.
  //
  // slug = Appwrite document ID of the post.

  async deletePost(slug) {
    try {
      // deleteDocument() removes the selected document
      // from the Appwrite database.
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId, // Database ID.
        config.appwriteCollectionId, // Collection ID.
        slug, // Document ID to delete.
      );
    } catch (error) {
      // Display an error if deletion fails.
      console.log("Delete Post Error =", error);
    }
  }

  // =====================================================
  // GET SINGLE POST
  // =====================================================

  // This method retrieves one specific blog post.
  //
  // slug = Appwrite document ID of the post.

  async getPost(slug) {
    try {
      // getDocument() fetches a single document
      // from the Appwrite database.
      return await this.databases.getDocument(
        config.appwriteDatabaseId, // Database ID.
        config.appwriteCollectionId, // Collection ID.
        slug, // Document ID of the required post.
      );
    } catch (error) {
      // Display an error if the post is not found
      // or if the database request fails.
      console.log("Get Post Error =", error);

      // Pass the error to the function that called getPost().
      throw error;
    }
  }

  // =====================================================
  // GET ALL POSTS
  // =====================================================

  // This method retrieves multiple blog posts.
  //
  // queries = Conditions used to filter database results.
  //
  // By default, it retrieves only posts whose status is "active".
  //
  // You can also pass different queries when calling this method.

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      // listDocuments() retrieves multiple documents
      // from the selected Appwrite collection.
      return await this.databases.listDocuments(
        config.appwriteDatabaseId, // Database ID.
        config.appwriteCollectionId, // Collection ID.
        queries, // Filtering conditions.
      );
    } catch (error) {
      // Display an error if fetching posts fails.
      console.log("Get Posts Error =", error);
    }
  }

  // =====================================================
  // UPLOAD FILE
  // =====================================================

  // This method uploads an image or another file
  // to Appwrite Storage.
  //
  // file = File object selected by the user.
  // Example: image selected using an HTML input field.

  async uploadFile(file) {
    try {
      // createFile() uploads a file to the Appwrite Storage bucket.
      return await this.bucket.createFile(
        config.appwriteBucketId, // Storage Bucket ID.
        ID.unique(), // Generate a unique ID for the uploaded file.
        file, // Actual file that we want to upload.
      );
    } catch (error) {
      // Display an error if uploading fails.
      console.log("UploadFile Error =", error);

      // Return false to indicate upload failure.
      return false;
    }
  }

  // =====================================================
  // DELETE FILE
  // =====================================================

  // This method deletes an uploaded file from Appwrite Storage.
  //
  // fileId = Unique ID of the uploaded file.

  async deleteFile(fileId) {
    try {
      // deleteFile() permanently deletes the selected file
      // from the specified storage bucket.
      return await this.bucket.deleteFile(
        config.appwriteBucketId, // Storage Bucket ID.
        fileId, // ID of the file we want to delete.
      );
    } catch (error) {
      // Display an error if file deletion fails.
      console.log("Delete File Error =", error);

      // Return false if deletion is unsuccessful.
      return false;
    }
  }

  // =====================================================
  // GET FILE PREVIEW
  // =====================================================

  // This method generates a preview URL for an uploaded image.
  //
  // fileId = Unique ID of the uploaded file.
  //
  // We can use the returned URL inside an HTML img tag
  // to display the uploaded image.

  getFilePreview(fileId) {
    // getFilePreview() generates a URL for displaying the file.
    return this.bucket.getFilePreview(
      config.appwriteBucketId, // Storage Bucket ID.
      fileId, // ID of the image we want to preview.
    );
  }
}

// =====================================================
// CREATE SERVICE OBJECT
// =====================================================

// Create one object of the DatabseSerivices class.
//
// We can now use this object throughout our application
// to access all database and storage methods.

const databaseServices = new DatabseSerivices();

// Export the object so that other files can use these methods.
export default databaseServices;
