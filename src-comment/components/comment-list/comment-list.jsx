import React, {Component} from "react"
import PropTypes from 'prop-types'

import CommentItem from "../comment-item/comment-item";
import './commentList.css'

export default class CommentList extends Component {
    //给组件类指定属性
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    render () {
        const {comments, deleteComment} = this.props
        //计算出是否显示
        const display = comments.length == 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">reply to comment</h3>
                <h2 style={{display}}>No comments, click left side to add comments!!!</h2>
                <ul className= "list-group">
                    {
                        comments.map((comment, index) => <CommentItem comment={comment} key = {index} deleteComment = {deleteComment} index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}

/*CommentList.protoTypes = {
    comments: PropTypes.array.isRequired
}*/

