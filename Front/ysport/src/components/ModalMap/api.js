function api() {
        const getUsers = () => {
      return fetch("http://127.0.0.1:8000/api/typesportsfield", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getUsers,
    };
  }
  
  export default api();