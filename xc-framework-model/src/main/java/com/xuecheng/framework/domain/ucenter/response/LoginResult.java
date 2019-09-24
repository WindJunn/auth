package com.xuecheng.framework.domain.ucenter.response;

import com.xuecheng.framework.domain.ucenter.ext.XcUserExt;
import com.xuecheng.framework.model.response.ResponseResult;
import com.xuecheng.framework.model.response.ResultCode;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@ToString
@NoArgsConstructor
public class LoginResult extends ResponseResult {
    public LoginResult(ResultCode resultCode,String token,XcUserExt userext) {
        super(resultCode);
        this.token = token;
        this.userext = userext;
    }
    private String token;
    private XcUserExt userext;
}
