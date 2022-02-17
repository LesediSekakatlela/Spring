import React, { Component } from 'react'

class TodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id
        }
    }
}