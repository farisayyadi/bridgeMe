//Temporary Data
const user = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const post = [
  { id: 1, title: "Post 1", body: " .....", userId: 1 },
  { id: 2, title: "Post 2", body: " .....", userId: 1 },
  { id: 3, title: "Post 3", body: " .....", userId: 2 },
  { id: 4, title: "Post 4", body: " .....", userId: 2 },
];


axport const getPost = async (slug) =>{
    try{
        connectToDb();
        const post = await Post.find({slug});
        return post
    }
    catch(err){
        console.log(err);
        throw new Error("failed to fetch post")
    }
}

export const getUser = async (id) =>{
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;

    }catch (err){
        console.log(err);
        throw new Error("Failed to fetch posts!")
    }
}

export const getUsers = async () =>{
    try{
        connectToDb();
        const users = await User.find();
        return users;

    }catch (err){
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}