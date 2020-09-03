import React, {Component} from "react"
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }
    handleDelete = () => {
        const {comment, deleteComment, index} = this.props
        //提示
        if (window.confirm('delete ${comment.username}  comments?')) {
            //确定后删除
            deleteComment(index)
        }

    }
    render () {
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleDelete}>delete</a>
                </div>
                <p className= "user" ><span>{comment.username}</span><span>says:</span></p>
                <p className= "content">{comment.content}</p>
            </li>
        )
    }
}
