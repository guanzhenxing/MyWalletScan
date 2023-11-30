import {Button} from 'antd';
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';

const MyFooter = () => {
    return (
        <>
            <Button
                type="link"
                href="https://twitter.com/im0x0y0x0"
                target="_blank"
                icon={<TwitterOutlined/>}
                size={"middle"}
            />
            <Button
                type="link"
                href="https://github.com/guanzhenxing/MyWalletScan"
                target="_blank"
                icon={<GithubOutlined/>}
                size={"middle"}
            />
        </>
    )
}
export default MyFooter
