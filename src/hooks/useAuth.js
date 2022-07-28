import { useDispatch, useSelector } from 'react-redux';
import { createUser as createUserReducer, updateCurrentUser as updateCurrentUserReducer, removeCurrentUser as removeCurrentUserReducer, toggleAuthPopup as toggleAuthPopupReducer } from '../redux/user/user.reducer';
import { selectCurrentUser, selectHiddenAuthPopup, selectUsers } from '../redux/user/user.selectors';

function useAuth(){
    const dispatch= useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const users = useSelector(selectUsers);
    const hiddenAuthPopup = useSelector(selectHiddenAuthPopup)


    function createUser(user){
        dispatch(createUserReducer(user));
        alert('success')
    }

    function updateCurrentUser(user){
        dispatch(updateCurrentUserReducer(user));
    }

    function removeCurrentUser(){
        dispatch(removeCurrentUserReducer());
    };
    
    function toggleAuthentiactionPopup(){
        dispatch(toggleAuthPopupReducer());
    }

    function login(user){
        const check = users.filter(item => item.username === user.username && item.password === user.password);
        if(check.length > 0){
            updateCurrentUser(check[0])
            alert('success');
            toggleAuthentiactionPopup();
        }else{
            alert('Wrong Credentials');
        }
    }

    function logout(){
        removeCurrentUser();
    }

    return {
        currentUser,
        users,
        hiddenAuthPopup,
        createUser,
        updateCurrentUser,
        removeCurrentUser,
        toggleAuthentiactionPopup,
        login,
        logout
    }
}

export default useAuth;