import React, {Component} from "react"
import PropTypes from 'prop-types'
import axios from 'axios'
export default class  extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    //当组件接受到新的属性时回调, 指定了新的searchName，需要发送请求
    componentWillReceiveProps(newProps) {
        const {searchName} = newProps
        //更新状态(请求中)
        this.setState({
            initView: false,
            loading: true
        })
        const url = 'https://api.github.com/search/users?q=aaa'
        console.log(url)
        axios.get(url)
            .then(response => {
                //得到响应数据
                const result = response.data
                //更新状态（成功）
                const users = result.items.map(item => {
                    return {name: item.login, url: item.html_url, avatarUrl: item.avatar_url}})
                this.setState({loading: false, users: users})
            })
            .catch(error => {
                //更新状态(失败)
                this.setState({loading: false, errorMsg: error.message})
            })

    }

    render () {
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props
        if (initView) {
            return <h2>Please enter key word</h2>
        } else if (loading) {
            return <h2>loading...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                // <div className={ searchName }>
                //     Hello, { searchName }!
                // </div>
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card">
                                <a href={user.url} target = "_blank">
                                    <img src ={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }

    }
}
