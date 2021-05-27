import Vuex from 'vuex';

export default function () {
    return new Vuex.Store({
        state: () => ({
            users: [
                { name: 'Ha Huy Giap', email: 'giapha@gmail.com', password: 'Hahuygiap95', address: 'Can tho', phone: '123234123' },
                { name: 'Baron', email: 'baron@gmail.com', password: 'Baron123', address: 'Binh Duong', phone: '23425424234' },
            ]
        }),
        mutations: {
            addUser(state, data) {
              state.users.push(data);
            }
          },
        modules: {
        }
    })
}

