import React from 'react'

import Option from './option'

const Options = (props)=>(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">your options</h3>
                <button 
                    className="button button--link" 
                    onClick={props.handleRemoveAll}
                >Remove All</button>        
            </div>
            {props.options.length === 0 && <p className="widget__message">please add options to get started!</p>}
            {
                props.options.map((option,index)=>{
                                return (<Option 
                                    key={option} 
                                    count={index + 1}
                                    optionText={option} 
                                    handleRemoveOption={props.handleRemoveOption} 
                                    />
                                )
                            })
            }
        </div>
);


export default Options;