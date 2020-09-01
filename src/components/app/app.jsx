import React, {Component} from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";
export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: [
    //             {username: 'Tom', content: 'React is good'},
    //             {username: 'Jack', content: 'React is difficult'}
    //         ]
    //     }
    // }
    //给组件对象指定state属性
    state = {
        comments: [
            {username: 'Tom', content: 'React is good'},
            {username: 'Jack', content: 'React is difficult'},
        ]
    }
    //添加评论
    addComment = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        //更新状态
        this.setState({comments})
    }
    //删除评论
    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }
    render () {
        const {comments} = this.state
        return (
            <div>
                <header className= "site-header jumbotron">
                    <div className= "container">
                        <div className="row">
                            <div className= "col-xs-12">
                                <h1>
                                    please comment about react
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>

                <div className= "container">
                    <CommentAdd addComment = {this.addComment}/>
                    <CommentList comments = {comments} deleteComment = {this.deleteComment}/>
                </div>
            </div>
        )
    }
}
