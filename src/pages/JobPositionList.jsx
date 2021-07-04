import React, { useState, useEffect } from 'react'
import {  Icon, Menu, Table } from 'semantic-ui-react'
import JobPositionService from 'services/jobPositionService'


export default function JobPositionList() {

    const [jobPositions, setjobPositions] = useState([])

    useEffect(() => {

        let jobPositionService= new JobPositionService()
        jobPositionService.getJobPositions().then((result) => setjobPositions(result.data.data));


    },[])
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPositions.map(jobPosition => (
                            <Table.Row key={jobPosition.id}>
                                <Table.Cell>{jobPosition.id}</Table.Cell>
                                <Table.Cell>{jobPosition.position}</Table.Cell>

                            </Table.Row>

                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>


        </div>
    )
}
