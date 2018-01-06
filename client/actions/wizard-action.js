import superagent from 'superagent';


let API_URL = `${__API_URL__}`;

const createWizard = name => ({
    type:'CREATE_WIZARD',
    payload: name
});

export const wizardCreate = payload => dispatch => {

    superagent.post(API_URL).send({name: "Gandelf"}).end(response => {
        console.log('server response', response);
    });


    //dispatch(createWizard({name: "Gandalf", id: 12345}))
}

const updateWizard = payload => ({
    type: 'UPDATE_WIZARD',
    payload
});

export const wizardUpdate = payload => dispatch => {
    dispatch(updateWizard({id: 12345, newName: "Gandalf the White"}));
} 

const deleteWizard = id => ({
    type: 'DELETE_WIZARD',
    payload: id
});

export const wizardDelete = payload => dispatch => {
    dispatch(deleteWizard({id: 12345}));
}

const init = (payload) => ({
    type: 'INIT',
    payload
});

export const initDB = payload => dispatch => {
    dispatch(init());
}