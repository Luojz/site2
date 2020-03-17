import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import mock from './mock.js';
import './index.less';

const Details = ({data = mock}) => {

    console.log(data);
    return (
        <div className="c-section c-p-y-tall function-mod">



            <div className="c-section-inner">
                <div className="c-section-hd">
                    <h3 className="c-section-tit">产品信息</h3>
                </div>

                <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                    <TabList>
                        <Tab>简介</Tab>
                        <Tab>概述</Tab>
                        <Tab>功能</Tab>
                        <Tab>实例类型</Tab>
                    </TabList>
                    <TabPanel>云服务器（Cloud Virtual Machine，CVM）为您提供稳定高效的弹性计算服务，只需动动手指，片刻等待，您就可以在云端获取属于自己的CVM，满足您的计算需求。随着业务需求的变化，您可以自由扩展或缩减计算资源。</TabPanel>
                    <TabPanel>建行云CVM云服务器提供云端自由扩展的虚拟计算能力，支持多种操作系统的应用部署环境。随着您业务的变化，CVM云服务器提供虚拟计算资源的扩展能力，为您提供专属的计算资源规格。CVM还为您提供多种方便快捷的管控工具，您可以通过控制台、命令行等多种方式对您的计算资源进行启动、监控等管理。</TabPanel>
                    <TabPanel>建行云CVM云服务器提供多种强大功能，提供稳定、可扩展、能自愈的企业级应用程序的计算资源部署平台。</TabPanel>
                    <TabPanel>
                        建行云CVM提供多种实例类型，用户可以基于需要提供的服务规模而选择实例计算能力、存储空间和网络访问方式。有关每种实例类型的更多信息，请参阅 CVM 实例配置。CVM的使用方式与传统计算的使用方式一致，用户对启动的实例有完全的控制权。

                        云服务器 CVM 提供多种适用于不同使用场景的实例类型供您选择，这些实例类型由 CPU、内存、存储和网络容量组成不同的组合，您可灵活地为您的应用程序选择适当的资源组合。

                        云服务器 CVM 提供丰富的计算、网络和磁盘的配置及容量扩展，支持不关机随时调整网络，支持关机状态下基于云盘的硬件调整和磁盘扩容。
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Details;