import mongoose from 'mongoose';
import model from './model.js'
// const persons = [
//     {
//         id : '1',
//         name : "naveen",
//         Departments : ["developer","testing"]
//     },
//     {
//         id : '2',
//         name : "kumar",
//         Departments : ["debugger","testing"]
//     }
// ];
// const cities = [
//     {
//         id : 11,
//         personid : '1',
//         name : "chennai"
//     },
//     {
//         id : 12,
//         personid : '2',
//         name : "madurai"
//     }
// ];
const resolvers = {
    Query:{
        persons: () => {

            return new Promise( (resolve,reject) => {
                model.find((err,data) => {
                    console.log(data);
                    resolve(data);
                });
            });
            
            // var updatedPerson = [];
            // persons.forEach( (person,index) => {
            //     var person1 = person;
            //     person1["city"] = cities.find( city => city.personid === person.id);
            //     updatedPerson.push(person1);
            // });
            // return updatedPerson;
        },
        person: (root, {id}) => {
            return model.findOne({_id:id});
        },
    },
    Mutation: {
        createPerson: (root, {name,departments}) =>{
            const person = new model({name : name,departments : departments});
            return person.save();
        },
        deletePerson: (root,{id}) => {
            var result = model.findOneAndRemove({name:id});
            console.log(result);
            return result;
        }
    }
}

export default resolvers;