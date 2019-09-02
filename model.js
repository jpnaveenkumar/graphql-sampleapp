import mongoose, { Schema } from 'mongoose';
import uuid from 'node-uuid';
const schema = mongoose.Schema;

const DepartmentSchema = new schema({
    id: { type : String, default: uuid.v1},
    name: String
});

const PersonSchema = new schema({
    id : { type : String, default: uuid.v4},
    name : String,
    departments : DepartmentSchema
});

const model = mongoose.model('person',PersonSchema);

export default model;
