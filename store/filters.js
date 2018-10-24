export const state = () => ({
  salary: 12000,
})

export const mutations = {
  setSalary (state, value) {
    console.log(value);
    state.salary = value;
  },
}
