import axios from 'axios'


export const getUser=()=>async(dispatch)=>{
    try{
    dispatch({
        type:"GET_USER_REQUEST"
    })
    const {data}=await axios.get("/api/v1/user")
    dispatch({
        type:"GET_USER_SUCCESS",
        payload:data.user
    })

}
catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
}


export const loginUser=(email,password)=>async(dispatch)=>{
    try{
    dispatch({
        type:"GET_LOGIN_REQUEST"
    })
    const {data}=await axios.post("/api/v1/login",{email,password},{
      headers: {
        "Content-Type": "application/json",
      },  
    })
    dispatch({
        type:"GET_LOGIN_SUCCESS",
        payload:data.message
    })

}
catch (error) {
    dispatch({
      type: "GET_LOGIN_FAILURE",
      payload: error.response.data.message,
    });
  }
}

export const logoutUser=()=>async(dispatch)=>{
    try{
    dispatch({
        type:"GET_LOGOUT_REQUEST"
    })
    const {data}=await axios.get("/api/v1/logout")
    dispatch({
        type:"GET_LOGOUT_SUCCESS",
        payload:data.user
    })

}
catch (error) {
    dispatch({
      type: "GET_LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
}

export const getProfile=()=>async(dispatch)=>{
    try{
    dispatch({
        type:"LOAD_USER_REQUEST"
    })
    const {data}=await axios.get("/api/v1/me")
    dispatch({
        type:"LOAD_USER_SUCCESS",
        payload:data.user
    })

}
catch (error) {
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
}


export const updateUser=(name,email,password,about,skills)=>async(dispatch)=>{
  try{
  dispatch({
      type:"UPDATE_USER_REQUEST"
  })
  const {data}=await axios.put("/api/v1/admin/update",{name,email,password,about,skills},{
    headers: {
      "Content-Type": "application/json",
    },  
  })
  dispatch({
      type:"UPDATE_USER_SUCCESS",
      payload:data.message
  })

}
catch (error) {
  dispatch({
    type: "UPDATE_USER_FAILURE",
    payload: error.response.data.message,
  });
}
}

export const addTimeline=(title,description,date)=>async(dispatch)=>{
  try{
  dispatch({
      type:"ADD_TIMELINE_REQUEST"
  })
  const {data}=await axios.post("/api/v1/admin/addTimeline",{title,description,date},{
    headers: {
      "Content-Type": "application/json",
    },  
  })
  dispatch({
      type:"ADD_TIMELINE_SUCCESS",
      payload:data.message
  })

}
catch (error) {
  dispatch({
    type: "ADD_TIMELINE_FAILURE",
    payload: error.response.data.message,
  });
}
}

export const deleteTimeline=(id)=>async(dispatch)=>{
  try{
  dispatch({
      type:"DELETE_TIMELINE_REQUEST"
  })
  const {data}=await axios.delete(`/api/v1/admin/deleteTimeline/${id}`)
  dispatch({
      type:"DELETE_TIMELINE_SUCCESS",
      payload:data.message
  })

}
catch (error) {
  dispatch({
    type: "DELETE_TIMELINE_FAILURE",
    payload: error.response.data.message,
  });
}
}

export const addProjects = (title,description,technologies,url,image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_PROJECT_REQUEST",
    });
    const { data } = await axios.post(
      "/api/v1/admin/addProjects",
      {title,description,technologies,url,image},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "ADD_PROJECT_SUCCESS",
      payload: data.message,
    });

  } catch (error) {
    dispatch({
      type: "ADD_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteProjects=(id)=>async(dispatch)=>{
  try{
  dispatch({
      type:"DELETE_PROJECT_REQUEST"
  })
  const {data}=await axios.delete(`/api/v1/admin/deleteProjects/${id}`)
  dispatch({
      type:"DELETE_PROJECT_SUCCESS",
      payload:data.message
  })

}
catch (error) {
  dispatch({
    type: "DELETE_PROJECT_FAILURE",
    payload: error.response.data.message,
  });
}
}

export const contactUser = (name,email,message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_USER_REQUEST",
    });
    const { data } = await axios.post(
      "/api/v1/contact",
      {name,email,message},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "CONTACT_USER_SUCCESS",
      payload: data.message,
    });

  } catch (error) {
    dispatch({
      type: "CONTACT_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};