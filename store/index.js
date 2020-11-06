const cookieparse = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    user: null,
  };
};

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    /**
     * nuxtServerInit是一个特殊的action方法
     * 这个action会在服务端渲染期间自动调用
     * 作用：初始化容器数据，传递给客户端使用
     */
    nuxtServerInit({commit},{req}){
        let user = null
        if(req.headers.cookie){
            const parsed = cookieparse.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                
            }
        }
        commit('setUser',user)
    }
}