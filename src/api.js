const API_URL_USER = 'https://wedev-api.sky.pro/api/user';
const API_URL = 'https://wedev-api.sky.pro/api/kanban';

export async function login({ login, password }) {

    return fetch(API_URL_USER + '/login', {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            // throw new Error(`Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.`);
            throw new Error(`Ошибка ввода данных`);
        }
        return response.json();
    });
}

export async function register({ login, name, password }) {

    return fetch(API_URL_USER + '/login', {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    })
        // .then(async(response) => {
        //     if (response.status === 400) {
        //         const errorMessage = await response.json()
        //         throw new Error(errorMessage.error);
        //     } else {
        //         return response.json()
        //     }
        // })
        .then((response) => {
            if (response.status === 400) {
                throw new Error(`Введенные вами данные не корректны.
                Чтобы завершить регистрацию, заполните все поля в форме`);
            }
            return response.json();
        });
}

export async function getTasks({ token }) {

    return fetch(API_URL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            if (response.status === 401) {
                throw new Error("Нет авторизации");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            alert('Ошибка на сервере')
            console.warn(error)
        });
}

export async function addTask({ token, taskData }) {

    return fetch(API_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
    })
        .then(async (response) => {
            if (response.status === 400) {
                const errorMessage = await response.json()
                throw new Error(errorMessage.error);
            } else {
                return response.json()
            }
        })
}

export async function deleteTask({ id, token }) {

    return fetch(API_URL + `/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            if (response.status !== 201) {
                alert('Something went wrong');
                throw new Error("Something went wrong");
            } else {
                return response.json()
            }
        })
}

export async function editTask({ id, token, taskData }) {

    const response = await fetch(API_URL + `/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
    });
    if (response.status !== 201) {
        throw new Error('Ошибка, попробуйте ещё')
    } else {
        return response.json();
    }
}
