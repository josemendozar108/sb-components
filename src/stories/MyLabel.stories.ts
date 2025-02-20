import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';



const meta = {
    title: 'UI/Labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {control: 'inline-radio'},
        fontColor: {control: 'color'}
    }
} satisfies Meta<typeof MyLabel>; 

export default meta; 
type Story = StoryObj<typeof meta>


export const Basic: Story = {
    args: {
        label: 'Basic label'
    }
}; 
export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true,
    }
}; 
export const Secundary: Story = {
    args: {
        label: 'Secundary label',
        color: 'text-secondary'
    }
}; 
export const CustomColor: Story = {
    args: {
        label: 'CustomColor',
        fontColor: '#5517ac'
    }
}; 

export const CustoBackgroundColor: Story = {
    args: {
        label: 'Custom Background Color',
        fontColor: '#eeeeee',
        backgroundColor: '#000000'
    }
}; 