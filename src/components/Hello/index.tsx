import * as React from 'react';

export interface Props {
    text: string
}

export class Hello extends React.Component<Props> {
  constructor(props: Props, context?: any) {
    super(props, context);  
  }

  render() {   
    return (
        <div className='hello'>
            {this.props.text}
        </div>
    ); 
  }
} 