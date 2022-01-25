import React, { Component } from 'react'
// import axios from 'axios'
class Adv extends Component {
	constructor(props) {
		super(props)

		this.state = {
            name: '',
            category: '',
            subCategory: '',
            caption:'',
		}
       
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
	
	}

	render() {
		const {  category,subCategory, caption,name } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
                <div>
                   Brand Name <input
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
                    Category <input
							type="text"
							name="category"
							value={category}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
					SubCategory	<input
							type="text"
							name="subCategory"
							value={subCategory}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						Captions<input
							type="text"
							name="caption"
							value={caption}
							onChange={this.changeHandler}
						/>
					</div>
                   
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Adv