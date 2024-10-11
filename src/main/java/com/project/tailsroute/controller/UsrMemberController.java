package com.project.tailsroute.controller;

import com.project.tailsroute.service.MemberService;
import com.project.tailsroute.util.Ut;
import com.project.tailsroute.vo.Member;
import com.project.tailsroute.vo.Rq;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UsrMemberController {

    @Autowired
    private Rq rq;

    @Autowired
    private MemberService memberService;

    @GetMapping("/usr/member/login")
    public String showMain() {
        return "usr/member/login";
    }

    @PostMapping("/usr/member/doLogin")
    @ResponseBody // 로그인 결과를 JSON 형태로 반환
    public String doLogin(HttpServletRequest req, @RequestParam("loginId") String loginId, @RequestParam("loginPw") String loginPw) {

        System.err.println(loginId);

        Rq rq = (Rq) req.getAttribute("rq");

        if (Ut.isEmptyOrNull(loginId)) {
            return Ut.jsHistoryBack("F-1", "loginId 입력 x");
        }
        if (Ut.isEmptyOrNull(loginPw)) {
            return Ut.jsHistoryBack("F-2", "loginPw 입력 x");
        }

        Member member = memberService.getMemberByLoginId(loginId);
        if (member == null) {
            return Ut.jsHistoryBack("F-3", Ut.f("%s는(은) 존재 x", loginId));
        }

        if (member.getLoginPw().equals(loginPw) == false) {
            return Ut.jsHistoryBack("F-4", Ut.f("비밀번호 틀림"));
        }

        return Ut.jsReplace("S-1", Ut.f("%s님 환영합니다", member.getNickname()), "/usr/home/main");
    }
}
