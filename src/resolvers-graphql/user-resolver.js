let users = [
    {
        id: 1,
        name: 'Jhon',
        email: 'email1@example.com',
        lastname: 'Doe',
        password: '123456'
    },
    {
        id: 2,
        name: 'Jane',
        email: 'email2@example.com',
        lastname: 'Smith',
        password: 'abcdef'
    },
    {
        id: 3,
        name: 'Alice',
        email: 'email3@example.com',
        lastname: 'Johnson',
        password: 'password1'
    },
    {
        id: 4,
        name: 'Bob',
        email: 'email4@example.com',
        lastname: 'Brown',
        password: 'password2'
    },
    {
        id: 5,
        name: 'Charlie',
        email: 'email5@example.com',
        lastname: 'Davis',
        password: 'password3'
    },
    {
        id: 6,
        name: 'David',
        email: 'email6@example.com',
        lastname: 'Miller',
        password: 'password4'
    },
    {
        id: 7,
        name: 'Eve',
        email: 'email7@example.com',
        lastname: 'Wilson',
        password: 'password5'
    },
    {
        id: 8,
        name: 'Frank',
        email: 'email8@example.com',
        lastname: 'Moore',
        password: 'password6'
    },
    {
        id: 9,
        name: 'Grace',
        email: 'email9@example.com',
        lastname: 'Taylor',
        password: 'password7'
    },
    {
        id: 10,
        name: 'Hank',
        email: 'email10@example.com',
        lastname: 'Anderson',
        password: 'password8'
    }];

const resolvers = {
    Query: {
        getUsers: () => users,
        getUser: (_, args) => {
            console.log(args);
            return users.find(user => user.id == args.id)
        }
    },
    Mutation: {
        createUser(_, args) {
            const id = users.length + 1;
            const name = args.name;
            const email = args.email;
            const lastname = args.lastname;
            const password = args.password;
            const newUser = { id, name, email, lastname, password };
            users.push(newUser);
            return newUser;
        },
        updateUser(_, args) {
            const id = args.id;
            const name = args.name;
            const email = args.email;
            const lastname = args.lastname;
            const password = args.password;
            const user = users.find(user => user.id == id);
            user.name = name;
            user.email = email;
            user.lastname = lastname;
            user.password = password;
            return user;
        },
        deleteUser(_, args) {
            const id = args.id;
            users = users.filter(user => user.id != id);
            return 'User deleted';
        }
    }
}

module.exports = resolvers;