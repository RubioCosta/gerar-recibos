import { db } from './firebase'
const { ref, get, set, remove, update} = require('firebase/database');

//create('/user/124', { valor: 124 })
export async function create(path, data) {
  try {
    const dataRef = ref(db, path);
    await set(dataRef, data);
  } catch(err) {
    throw err
  }
}

export async function edit(path, data) {
  try {
    const dataRef = ref(db, path);
    await update(dataRef, data);
  } catch (err) {
    throw err;
  }
}

//getById('/user/123')
export async function getById(path) {
  try {
    const dataRef = ref(db, path);
    const data = await get(dataRef);

    if (data.exists()) {
      return data.val();
    }

    throw new Error("Usuário não localizado!")
  } catch(err) {
    throw err
  }
}

//getAll('/user')
export async function getAll(path) {
  try {
    try {
      const dataRef = ref(db, path);
      const data = await get(dataRef);
  
      if (data.exists()) {

        const result = Object.entries(data.val()).map(([key, value]) => ({
          id: key,
          ...value
        }));

        return result;
      }
  
      throw new Error("Usuário não localizado!")
    } catch(err) {
      throw err
    }
  } catch(err) {
    console.log(err)
  }
}

//exclude('user/124')
export async function exclude(path) {
  try {
    const dataRef = ref(db, path);
    await remove(dataRef)
  } catch(err) {
    throw err
  }
}