import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { HEADER_HEIGHT_CLASS } from 'constants/theme.constant'
import { useSelector } from 'react-redux'

const Header = (props) => {
    const { headerStart, headerEnd, headerMiddle, className, container } = props

    const themeColor = useSelector((state) => state.theme.themeColor)
    console.log('themeco', themeColor)
    return (
        <header className={classNames('header', className)}>
            <div
                className={classNames(
                    `header-wrapper bg-${themeColor}-500 text-white`,
                    HEADER_HEIGHT_CLASS,
                    container && 'container mx-auto'
                )}
            >
                <div className="header-action header-action-start">
                    {headerStart}
                </div>
                {headerMiddle && (
                    <div className="header-action header-action-middle">
                        {headerMiddle}
                    </div>
                )}
                <div className="header-action header-action-end">
                    {headerEnd}
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    headerStart: PropTypes.node,
    headerEnd: PropTypes.node,
    container: PropTypes.bool,
}

export default Header
