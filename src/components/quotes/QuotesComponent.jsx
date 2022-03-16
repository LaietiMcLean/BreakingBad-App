import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetchQuotes } from '../../hooks/useFetchQuotes'


    export const QuotesComponent = () => {

        const {counter, increment} = useCounter(1)
        const {loading, data} = useFetchQuotes(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        const {author, quote} = !!data && data[0]
        console.log(author, quote);

        return (
            <>
            <div className="container-quotes"> 
                <h3>❝Breaking Bad Quotes❞</h3>
                <hr />
                {loading ? 
                    (
                        <div className="alert alert-info text-center">
                            Loading... 
                        </div>
                    ) 
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className='mb-3'>{quote}</p>
                            <p className="footer-author">🗨 {author}</p>
                        </blockquote>
                    )
                }  

                <button 
                    className="btn"
                    onClick={increment}
                >
                    Next quote
                </button>

            </div>
            </>
        )
    }
